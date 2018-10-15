import home_enter from '@/assets/menu/home_enter.svg'
import home_leave from '@/assets/menu/home_leave.svg'
import map_enter from '@/assets/menu/map_enter.svg'
import map_leave from '@/assets/menu/map_leave.svg'
import illustration_enter from '@/assets/menu/illustration_enter.svg'
import illustration_leave from '@/assets/menu/illustration_leave.svg'
import member_enter from '@/assets/menu/member_enter.svg'
import member_leave from '@/assets/menu/member_leave.svg'

export default [
    {
      path: '/',
      text: 'ホーム',
      color: '0, 169, 165',
      buttonEnter: home_enter,
      buttonLeave: home_leave,
    },
    {
      path: '/maps',
      text: 'マップ',
      color: '50, 166, 56',
      buttonEnter: map_enter,
      buttonLeave: map_leave,
    },
    {
      path: '/points',
      text: 'ポイント',
      color: '224, 90, 0',
      buttonEnter: null,
      buttonLeave: null,
    },
    {
      path: '/illustration',
      text: 'ずかん',
      color: '239, 32, 86',
      buttonEnter: illustration_enter,
      buttonLeave: illustration_leave,
    },
    {
      path: '/members',
      text: 'メンバー',
      color: '154, 23, 186',
      buttonEnter: member_enter,
      buttonLeave: member_leave,
    },
  ]