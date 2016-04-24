get "/" do
	erb :index
end

get "/game/new" do
	if request.xhr?
		200
	end
end

post "/game/new" do
	if request.xhr?
		200
		content_type :json
		params.to_json
	end
end