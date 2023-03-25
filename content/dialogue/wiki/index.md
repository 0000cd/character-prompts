---
title: "名词解释"
date: 2023-03-21
draft: false
tags: ["文档","ChatGPT","Prompts"]
series: ["帮助文档"]
series_order: 1
summary: "cessssssssssssssssss"
---

## 什么是 ChatGPT

> ChatGPT 是 OpenAI 基于 GPT-3.5 架构训练的大型语言模型，它能够进行对话和文本生成。ChatGPT 可以对各种话题进行聊天和提供有用的信息，从简单的问题到复杂的话题都可以处理。ChatGPT 使用深度学习技术，具有强大的语言处理能力，可以模拟人类的对话和思考方式。 —— ChatGPT

让 ChatGPT 说人话后……

> ChatGPT 是一个类似于聊天机器人的程序，它可以回答你的问题、跟你聊天，还能够根据你输入的文字生成新的文本。它的工作原理是通过学习大量的文本数据来理解人类语言的规律，并根据这些规律来做出回答和生成文本。因此，它可以帮助人们解答问题、获取信息，并提供各种有用的服务。 —— ChatGPT

LINK：[百度百科](https://baike.baidu.com/item/ChatGPT/62446358) / [维基百科](https://zh.wikipedia.org/wiki/ChatGPT) / [OpenAI](https://openai.com/) / [ChatGPT](https://chat.openai.com/)

---

## 什么是 Prompts

> ChatGPT 的 prompts 是指一系列的输入提示，用于启发和引导用户在与 ChatGPT 进行交互时输入问题或指令。这些提示可以是针对某个特定主题的问题或是与 ChatGPT 进行一般性对话的提示，用户可以根据自己的需要和兴趣进行选择。ChatGPT 的 prompts 旨在帮助用户更快地与 ChatGPT 进行交互，并获得更准确和有用的回答。在输入提示后，ChatGPT 会根据用户输入的内容进行理解和处理，并尽可能地给出有意义的回答或建议。—— ChatGPT

让 ChatGPT 说人话后……

> Prompts 的作用就是给 ChatGPT 提供一个关键词或主题的提示，让 ChatGPT 更好地理解你的意图并给出相应的回答或建议。就像你在和一个朋友聊天时，你需要告诉他们你要谈论什么，这样他们才能更好地理解你的话题并做出适当的回应。Prompts 就像是告诉 ChatGPT 你想谈论什么，让 ChatGPT 更好地理解你的问题或需求，并给出更有针对性的回答。使用 prompts 可以让 ChatGPT 更快地理解你的意图，从而提高你与 ChatGPT 进行交互的效率和准确性。 —— ChatGPT

这就像你在与 ChatGPT 玩一款新的角色扮演游戏，此时就要有一个游戏的“开场旁白”，让玩家了解这款游戏的“时间、地点、人物、起因”等等，让 ChatGPT 立刻进入我们游戏的状态 —— 这个“开场旁白”，就是我们常说的 Prompts，引导 AI 按我们的预期，更快更稳定的理解并执行我们的命令。

就此而言 Prompts 更像是某种**烹饪 AI 的“秘方”**，你得到某个 Prompts，就能获得同样风味的 AI。

例如下面这段 Prompts，可以让 ChatGPT 扮演书或电影中的任意角色：

> [Act as 'Character' from 'Movie/Book/Anything'](https://github.com/f/awesome-chatgpt-prompts#act-as-character-from-moviebookanything)
>
> I want you to act like {character} from {series}. I want you to respond and answer like {character} using the tone, manner and vocabulary {character} would use. Do not write any explanations. Only answer like {character}. You must know all of the knowledge of {character}. My first sentence is "Hi {character}."
>
> 我希望你表现得像{来源} 中的{角色}。 我希望你像{角色}一样使用{角色}会使用的语气、方式和词汇来回应和回答。 不要写任何解释。 只回答像{角色}。 你必须知道{角色}的所有知识。 我的第一句话是“嗨{角色}”。

我们正是用类似的 Prompts 方式，让 ChatGPT 按我们的意愿，扮演我们的 AI 虚拟朋友：

- 🔮 [探索我们所有的朋友](/posts/)
- 🪄 [怎样创建 Prompts](/docs/prompts/)
- 🎓 [了解更多 Prompts](https://github.com/f/awesome-chatgpt-prompts)

{{< github repo="0000cd/character-prompts" >}}

---

## 怎样用 Prompts

以 ChatGPT 为例：

1. 你应该先有一个 [OpenAI 账号](https://platform.openai.com/)。搜索一下 `怎样注册 chatgpt`，网上有很多攻略这里不再赘述。
2. 体验 [官方网页版](https://chat.openai.com/)，但由于官方预置了 Prompts，效果可能一般。尝试开始聊天时，将 Prompts 作为第一句话发给 AI。
3. 使用 ChatGPT API，[Github 上有较多成熟的项目](https://github.com/search?q=chatgpt)，可方便的配置 Prompts，注意免费额度限制。根据项目说明，配置好 Prompts 的参数。

仅供参考：

{{< github repo="lencx/ChatGPT" >}}

{{< github repo="Chanzhaoyu/chatgpt-web" >}}

{{< github repo="fuergaosi233/wechat-chatgpt" >}}

{{< github repo="TBXark/ChatGPT-Telegram-Workers" >}}

{{< github repo="ourongxing/chatgpt-vercel" >}}

---

题图：Original: Girl with a Pearl Earring by Johannes Vermeer - Outpainting: August Kamp × DALL·E