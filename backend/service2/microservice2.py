from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/microservice2', methods=['GET'])
def microservice2():
    return jsonify(["Greetings", "from", "Microservice2"])

if __name__ == '__main__':
    app.run(port=5002)
