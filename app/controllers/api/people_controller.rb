class Api::PeopleController < ApplicationController
  def new
    @person = Person.new
  end

  def create
    @person = Person.new(person_params)
    if @person.save
      render :show
    else
      render json: @person.errors.full_messages
    end
  end

  def index
    @people = Person.all
  end

  def show
    @person = Person.find(params[:id])
  end

  private

  def person_params
    params.require(:person).permit(:name, :birth_year, :eye_color, :gender, :hair_color, :height, :mass, :skin_color, :homeworld, :films, :species, :starships, :vehicles, :url, :created, :edited)
  end
end
