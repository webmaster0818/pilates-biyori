#!/usr/bin/env python3
"""
Add PriceComparisonTable and FAQSchema to all area pages.
- Insert PriceComparisonTable import + component after TableOfContents
- Insert FAQSchema import + component in head/script area
- Transform こだわりから探す section headings to H2-level目的別
"""
import os
import re
import glob

AREA_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'app', 'area')

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    # 1. Add PriceComparisonTable import if not present
    if 'PriceComparisonTable' not in content:
        # Add import after existing imports
        import_line = "import { PriceComparisonTable } from '@/components/PriceComparisonTable'\n"
        # Find last import line
        last_import = 0
        for m in re.finditer(r'^import .+$', content, re.MULTILINE):
            last_import = m.end()
        if last_import > 0:
            content = content[:last_import] + '\n' + import_line + content[last_import:]
            modified = True

    # 2. Add FAQSchema import if not present
    if 'FAQSchema' not in content:
        import_line = "import { FAQSchema } from '@/components/FAQSchema'\n"
        last_import = 0
        for m in re.finditer(r'^import .+$', content, re.MULTILINE):
            last_import = m.end()
        if last_import > 0:
            content = content[:last_import] + '\n' + import_line + content[last_import:]
            modified = True

    # 3. Add PriceComparisonTable component after TableOfContents
    if 'PriceComparisonTable' in content and '<PriceComparisonTable' not in content:
        # Find the area name from metadata title
        area_match = re.search(r"title:\s*'[^']*ピラティス([^おo]+?)おすすめ", content)
        if not area_match:
            area_match = re.search(r"title:\s*\"[^\"]*ピラティス([^おo]+?)おすすめ", content)

        area_name = area_match.group(1) if area_match else ''

        # Insert after <TableOfContents ... />
        toc_pattern = r'(<TableOfContents[^/]*/\s*>)'
        toc_match = re.search(toc_pattern, content)
        if toc_match:
            insert_pos = toc_match.end()
            component = f'\n\n        <PriceComparisonTable studios={{studios}} areaName="{area_name}" />'
            content = content[:insert_pos] + component + content[insert_pos:]
            modified = True

    # 4. Add FAQSchema before closing </> or before </main>
    if 'FAQSchema' in content and '<FAQSchema' not in content:
        # Insert FAQSchema just before <Navigation />
        nav_match = re.search(r'(\s*<Navigation\s*/?\s*>)', content)
        if nav_match:
            insert_pos = nav_match.start()
            component = '\n      <FAQSchema faqs={faqs} />'
            content = content[:insert_pos] + component + content[insert_pos:]
            modified = True

    # 5. Transform こだわりから探す into 目的別H2 sections
    if 'こだわりから探す' in content and '目的別おすすめスタジオ' not in content:
        content = content.replace('こだわりから探す', '目的別おすすめスタジオ')
        modified = True

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    pages = glob.glob(os.path.join(AREA_DIR, '*/page.tsx'))
    total = 0
    updated = 0
    errors = []

    for page in sorted(pages):
        total += 1
        area = os.path.basename(os.path.dirname(page))
        try:
            if process_file(page):
                updated += 1
                print(f"  ✅ {area}")
            else:
                print(f"  ⏭️  {area} (already up to date)")
        except Exception as e:
            errors.append((area, str(e)))
            print(f"  ❌ {area}: {e}")

    print(f"\nTotal: {total} | Updated: {updated} | Errors: {len(errors)}")
    if errors:
        for area, err in errors:
            print(f"  ERROR {area}: {err}")

if __name__ == '__main__':
    main()
