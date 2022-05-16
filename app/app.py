from flask import Flask, request, render_template
from model import hola
import requests

app=Flask(__name__)

@app.route('/api/<section>', methods=['GET'])
def api(section):
    hola(section)
    return request.host_url + "/static/results/00000.jpg"
    
@app.route('/')
def index():
    data = { 'title':'Photo Handler' }
    return render_template('index.html', data=data)

@app.route('/result/<type>')
def results(type):
    url = "http://127.0.0.1:5000/api/" + type
    payload={}
    headers = {}
    response = requests.request("GET", url, headers=headers, data=payload)
    data = { 'title':'Photo Handler', 'image': response.text }
    return render_template('result.html', data=data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)