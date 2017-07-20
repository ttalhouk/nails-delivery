require 'rails_helper'

RSpec.feature "Creating articles" do
  # before do
  #   @user = User.create!({email:"example@example.com", password:"123456", password_confirmation:"123456"})
  #
  #   login_as(@user)
  #
  # end
  # scenario "A user creates a new article" do
  #   visit '/'
  #
  #   click_link "New Article"
  #
  #   fill_in "Title", with:"Creating a blog"
  #   fill_in "Body", with:"blog content"
  #
  #   click_button "Create Article"
  #
  #   expect(Article.last.author).to eq(@user)
  #   expect(page).to have_content("Article has been created.")
  #   expect(page.current_path).to eq(articles_path)
  #   expect(page).to have_content("Created by: #{@user.email}")
  #
  # end
  # scenario "A user fails to create a new article" do
  #   visit '/'
  #
  #   click_link "New Article"
  #
  #   fill_in "Title", with:""
  #   fill_in "Body", with:""
  #
  #   click_button "Create Article"
  #
  #   expect(page).to have_content("Article has not been created.")
  #   expect(page).to have_content("Title can't be blank")
  #   expect(page).to have_content("Body can't be blank")
  #   expect(page.current_path).to eq(articles_path)
  #
  #
  # end
end
