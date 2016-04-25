get "/" do
	erb :index
end

get "/games/new" do
	if request.xhr?
		status 200
	end
end

post "/games" do
	if request.xhr?
		p1 = Player.new(name: params['player_1'])
		p2 = Player.new(name: params['player_2'])
		if (p1.save && p2.save)
			new_game = Game.new
			route = rand(1000..100000)
			new_game.secret_url = route
			new_game.players << p1
			new_game.players << p2
			if new_game.save
				status 200
				params['secret_url'] = "games/#{route}"
				content_type :json
				params.to_json
			else
				status 400
				errors = new_game.errors.full_messages
				erb :"_errors", locals: {errors: errors}, layout: false
			end
		else
			status 400
			errors = p1.errors.full_messages.concat(p2.errors.full_messages)
			erb :"_errors", locals: {errors: errors}, layout: false
		end
	end
end

