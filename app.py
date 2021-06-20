from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    nome = "  Albert Einstein"
    idade = 42
    return render_template( #além de passar o index.html faço algumas atribuções
        "index.html",
        nome = nome,
        idade=idade,
 
    ) 





if __name__ == "__main__":
    app.run(debug=True)