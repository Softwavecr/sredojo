from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/microservice2', methods=['GET'])
def microservice2():
    return jsonify(["Greetings", "from", "Microservice2"])

if __name__ == '__main__':
    app.run(port=5002)

# run
# python microservice2.py

# Output
# * Running on http://

# Build the Docker image
# docker build -t microservice2 .
# username@hostname:~/path/websimple/sredojo/backend/service2$ sudo docker build -t microservice2 .

# username@hostname:~/path/websimple/sredojo/backend/service2$ sudo docker tag microservice2 y8p3kxzuctktsz6/softwavecr:ms2latestag