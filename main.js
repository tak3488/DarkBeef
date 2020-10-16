const main = () => {
  dark() //ダークモード対応
  deleteAdminMenu() //管理者用のログインフォームを非表示
  deleteCourseCategories() //コースカテゴリを非表示
  deleteCourses(ids) //選択したidのコースのみをナビゲーションに表示
}