from flask import Flask
from flask import render_template, url_for, redirect

app = Flask(__name__)

@app.route('/')
def red():
    return redirect(url_for('home'))

@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/timer')
def timer():
    return render_template('timer.html')

@app.route('/music')
def music():
    return render_template('music.html')

@app.route('/resources')
def resource():
    return render_template('resources.html')

if __name__ == '__main__':
    app.run(debug=True)