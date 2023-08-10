import { isTurnChild } from '@/micro/utils'
import { lifeCycle } from '@/micro/lifeCycle'

export const turnApp = async () => {
  if (isTurnChild()) {
    // 微前端的生命周期执行
    await lifeCycle()
  }
}
