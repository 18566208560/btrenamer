<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">技术支持</h1>
    <div class="space-y-6">
      <div class="article-card">
        <h2 class="text-xl font-semibold mb-4">常见问题</h2>
        <ul class="space-y-4">
          <li v-for="(faq, index) in faqs" :key="index">
            <h3 class="font-medium text-gray-900">{{ faq.question }}</h3>
            <p class="text-gray-600">{{ faq.answer }}</p>
          </li>
        </ul>
      </div>
      
      <div class="article-card">
        <h2 class="text-xl font-semibold mb-4">联系支持团队</h2>
        <p class="text-gray-600 mb-4">如果您没有找到需要的答案，请随时联系我们的支持团队。</p>
        <a href="mailto:support@wordflow.com" class="text-blue-600 hover:underline">
          发送邮件给支持团队
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: '如何重置密码？',
    answer: '您可以在登录页面点击"忘记密码"链接，按照提示进行密码重置。'
  },
  {
    question: '如何更新个人信息？',
    answer: '登录后，点击右上角的个人头像，进入设置页面即可更新个人信息。'
  },
  // 更多FAQ...
]
</script>