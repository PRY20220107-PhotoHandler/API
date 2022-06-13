from flask import Flask, request, render_template
import requests

app=Flask(__name__)
    
@app.route('/')
def index():
    data = { 'title':'Photo Handler' }
    return render_template('index.html', data=data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)