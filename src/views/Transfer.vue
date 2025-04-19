<template>
  <div style="padding: 20px; text-align: center;">
    <h3>测试授权是否生效</h3>
    <p>请点击下方按钮尝试转账 1 USDT</p>
    <van-button type="warning" block @click="testTransfer">测试转账</van-button>
  </div>
</template>

<script setup>
import { Toast } from 'vant'

function testTransfer() {
  Toast('你已授权本地址可代你转账 USDT（最多9999）')
}
</script>