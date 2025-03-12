from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/microservice2', methods=['GET'])
def microservice2():
    return jsonify(["Hello", "from", "Microservice2"])

if __name__ == '__main__':
    app.run(port=5002)
