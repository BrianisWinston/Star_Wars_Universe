class FilmsController < ApplicationController
  def new
    @film = Film.new
  end

  def create
    @film = Film.new(film_params)
    if @film.save
      render :show
    else
      render json: @film.errors.full_messages
    end
  end

  def index
    @films = Film.all
  end

  def show
    @film = Film.find(params[:id])
  end

  private

  def film_params
    params.require(:film).permit(:title, :episode_id, :opening_crawl, :director, :producer, :release_date, :species, :starships, :vehicles, :characters, :planets, :url, :created, :edited)
  end
end
