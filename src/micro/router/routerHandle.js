import { isTurnChild } from "@/micro/utils"

export const turnApp = () => {
  if(isTurnChild()){
    console.log('路由切换了')
  }
}
