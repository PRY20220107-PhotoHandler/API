from flask import Flask

from model import hola

app=Flask(__name__)

@app.route('/')
def index():
    message = hola();
    return message;

if __name__=="__main__":
    app.run(debug=True, port=4000)