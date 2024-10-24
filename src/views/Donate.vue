<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">支持我们</h1>
    
    <div class="article-card mb-8">
      <h2 class="text-xl font-semibold mb-4">为什么捐赠？</h2>
      <p class="text-gray-600">
        您的捐赠将帮助我们持续改进平台，创作更多优质内容，为更多学习者提供帮助。
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="tier in donationTiers" :key="tier.name" class="article-card">
        <h3 class="text-xl font-semibold mb-2">{{ tier.name }}</h3>
        <p class="text-2xl font-bold text-blue-600 mb-4">¥{{ tier.amount }}</p>
        <ul class="space-y-2 mb-6">
          <li v-for="benefit in tier.benefits" :key="benefit" class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            {{ benefit }}
          </li>
        </ul>
        <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          选择
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const donationTiers = [
  {
    name: '支持者',
    amount: '50',
    benefits: [
      '获得支持者徽章',
      '优先技术支持',
      '提前访问新内容'
    ]
  },
  {
    name: '赞助者',
    amount: '200',
    benefits: [
      '获得赞助者徽章',
      '专属技术咨询',
      '提前访问新内容',
      '参与内容规划'
    ]
  }
]
</script>