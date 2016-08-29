#Alivia Blount
#Code2040 API Challenge
#Step 1 registration

#test API call using postman

require 'net/http'

url = 'http://challenge.code2040.org/api/register'
params = {
  token => '917cf8410513d1256d5c3024403ae85d',
  github => 'https://github.com/amblount/code2040API.git'
}

resp = Net::HTTP.post_form(url, params)
resp_text = resp.body
