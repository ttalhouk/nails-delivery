require 'rails_helper'

RSpec.feature "Showing an article" do
  # before do
  #   @user = User.create!({email:"example@example.com", password:"123456", password_confirmation:"123456"})
  #   @user2 = User.create!({email:"other@example.com", password:"123456", password_confirmation:"123456"})
  #
  #   @article = @user.articles.create(title:'The First Article', body:'Lorem Ipsum Carpe Diem')
  # end
  #
  # scenario "A user checks their article details" do
  #   login_as(@user)
  #   visit '/'
  #
  #   click_link @article.title
  #
  #   expect(page).to have_content(@article.title)
  #   expect(page).to have_content(@article.body)
  #   expect(page).to have_link("Edit Article")
  #   expect(page).to have_link("Delete Article")
  #   expect(current_path).to eq(article_path(@article))
  # end
  #
  # scenario "A user views another users article details" do
  #   login_as(@user2)
  #   visit '/'
  #
  #   click_link @article.title
  #
  #   expect(page).to have_content(@article.title)
  #   expect(page).to have_content(@article.body)
  #   expect(page).to_not have_link("Edit Article")
  #   expect(page).to_not have_link("Delete Article")
  #   expect(current_path).to eq(article_path(@article))
  # end
  # scenario "A non logged in user views article details" do
  #   visit '/'
  #
  #   click_link @article.title
  #
  #   expect(page).to have_content(@article.title)
  #   expect(page).to have_content(@article.body)
  #   expect(page).to_not have_link("Edit Article")
  #   expect(page).to_not have_link("Delete Article")
  #   expect(current_path).to eq(article_path(@article))
  # end

end
