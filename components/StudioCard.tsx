import { StudioCardClient, type StudioInput } from './StudioCardClient'
import { toDisplayBasicInfo, toDisplayUserProfile } from '@/lib/studioDisplay'

type StudioCardProps = {
  studio: StudioInput
  index: number
}

/**
 * エリアページから呼ばれる店舗カード（サーバー側の入口）。
 *
 * 店舗データのうち出典の無い項目（年齢層・男女比のパーセント表記・「不定休」・
 * 「公式サイト参照」等の文言）は lib/studioDisplay.ts で落としてから
 * Client Component に渡す。ここで落とすので HTML / RSC ペイロードにも載らない。
 * データファイル（app/area/星/page.tsx）は書き換えない方針（2026-10-07）。
 */
export function StudioCard({ studio, index }: StudioCardProps) {
  const { userProfile, basicInfo, ...rest } = studio
  const clean = {
    ...rest,
    userProfile: toDisplayUserProfile(userProfile),
    basicInfo: toDisplayBasicInfo(basicInfo),
  }
  return <StudioCardClient studio={clean} index={index} />
}
