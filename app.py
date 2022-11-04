from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)
@app.route("/")
def index():
	return render_template("index.html")
@app.route("/tarif")
def tarif():
	return render_template("tarif.html")
@app.route("/contact")
def contact():
	return render_template("callcenter.html")
@app.route("/restarea")
def restarea():
	return render_template("restarea.html")


if __name__ == '__main__':
	app.run(debug=True)