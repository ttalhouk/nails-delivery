require 'rails_helper'

RSpec.feature "Editing an article" do
  # before do
  #   @user = User.create!({email:"example@example.com", password:"123456", password_confirmation:"123456"})
  #
  #   login_as(@user)
  #   @article = @user.articles.create(title:'The First Article', body:'Lorem Ipsum Carpe Diem')
  # end
  #
  # scenario "A user edits article details" do
  #   visit "/articles/#{@article.id}"
  #
  #   click_link "Edit Article"
  #
  #
  #
  #   fill_in "Title", with:"New Title"
  #   fill_in "Body", with:"New Body"
  #
  #   click_button "Update Article"
  #
  #   expect(page.current_path).to eq(article_path(@article))
  #   expect(page).to have_content("Article has been updated successfully.")
  #   expect(page).to have_content("New Title")
  #   expect(page).to have_content("New Body")
  # end
  # scenario "A user fails to edit article details" do
  #   visit "/articles/#{@article.id}"
  #
  #   click_link "Edit Article"
  #
  #
  #
  #   fill_in "Title", with:""
  #   fill_in "Body", with:"New Body"
  #
  #   click_button "Update Article"
  #
  #   expect(page.current_path).to eq(article_path(@article))
  #   expect(page).to have_content("Article could not be updated.")
  # end
end
