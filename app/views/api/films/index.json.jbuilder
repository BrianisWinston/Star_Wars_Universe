@films.each do |film|
  json.set! film.id do
    json.partial! 'film', film: film
  end
end
