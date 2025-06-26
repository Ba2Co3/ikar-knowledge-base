import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Untitled",
    description: "No description provided",
  },
  components: {
    callout: {
      note: "Note",
      abstract: "Abstract",
      info: "Info",
      todo: "Todo",
      tip: "Tip",
      success: "Success",
      question: "Question",
      warning: "Warning",
      failure: "Failure",
      danger: "Danger",
      bug: "Bug",
      example: "Example",
      quote: "Quote",
    },
    backlinks: {
      title: "Отсылки",
      noBacklinksFound: "",
    },
    themeToggle: {
      lightMode: "Светлая тема",
      darkMode: "Тёмная тема",
    },
    explorer: {
      title: "Погрузиться",
    },
    footer: {
      createdWith: "Создано с помощью",
    },
    graph: {
      title: "График",
    },
    recentNotes: {
      title: "Недавние заметки",
      seeRemainingMore: ({ remaining }) => `See ${remaining} more →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Переход из ${targetSlug}`,
      linkToOriginal: "Ссылка на оригинал",
    },
    search: {
      title: "Поиск",
      searchBarPlaceholder: "Я ищу…",
    },
    tableOfContents: {
      title: "Содержание",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `время чтения ~${minutes} мин`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Recent notes",
      lastFewNotes: ({ count }) => `Last ${count} notes`,
    },
    error: {
      title: "Страница не найдена",
      notFound: "Эта страница скрыта или не найдена по указу Отдела тайн",
      home: "Не нажимайте на эту кнопку, это уловка Отдела тайн. Просто нажмите «назад» в окне браузера",
    },
    folderContent: {
      folder: "Папка",
      itemsUnderFolder: ({ count }) =>
        `в этой папке ${count} элемент${getForm(count, "", "а", "ов")}`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Tag Index",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item with this tag." : `${count} items with this tag.`,
      showingFirst: ({ count }) => `Showing first ${count} tags.`,
      totalTags: ({ count }) => `Found ${count} total tags.`,
    },
  },
} as const satisfies Translation

function getForm(number: number, form1: string, form2: string, form5: string): string {
  const remainder100 = number % 100
  const remainder10 = remainder100 % 10

  if (remainder100 >= 10 && remainder100 <= 20) return form5
  if (remainder10 > 1 && remainder10 < 5) return form2
  if (remainder10 == 1) return form1
  return form5
}
