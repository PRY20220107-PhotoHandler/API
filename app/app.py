from flask import Flask, request
from model import hola

app=Flask(__name__)

@app.route('/api/<section>', methods=['GET'])
def index(section):
    hola(section)
    return request.host_url + "/static/results/00000.jpg"
    

if __name__=="__main__":
    app.run(debug=True, port=4000)