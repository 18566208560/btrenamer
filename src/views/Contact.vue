<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">联系我们</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div v-for="method in contactMethods" :key="method.title" class="article-card">
        <h2 class="text-xl font-semibold mb-2">{{ method.title }}</h2>
        <p class="text-gray-600">{{ method.description }}</p>
        <a :href="method.link" class="text-blue-600 hover:underline mt-4 block">
          {{ method.linkText }}
        </a>
      </div>
    </div>
    
    <div class="article-card">
      <h2 class="text-xl font-semibold mb-4">发送消息</h2>
      <form class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            您的名字
          </label>
          <input
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            电子邮件
          </label>
          <input
            type="email"
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            消息内容
          </label>
          <textarea
            rows="4"
            class="w-full px-3 py-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        
        <button
          type="submit"
          class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          发送消息
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const contactMethods = [
  {
    title: '客户支持',
    description: '有任何使用问题，请联系我们的支持团队',
    link: 'mailto:support@wordflow.com',
    linkText: 'support@wordflow.com'
  },
  {
    title: '商务合作',
    description: '寻求商务合作，请联系我们的商务团队',
    link: 'mailto:business@wordflow.com',
    linkText: 'business@wordflow.com'
  }
]
</script>