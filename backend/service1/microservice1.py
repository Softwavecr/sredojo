from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/microservice1', methods=['GET'])
def microservice1():
    return jsonify(["Hello", "from", "Microservice1"])

if __name__ == '__main__':
    app.run(port=5001)
