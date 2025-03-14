from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/microservice1', methods=['GET'])
def microservice1():
    return jsonify(["Hello", "from", "Microservice1"])

if __name__ == '__main__':
    app.run(port=5001)

# run
# python microservice1.py

# Output
# * Running on http://

# Build the Docker image
# docker build -t microservice1 .
# username@hostname:~/path/websimple/sredojo/backend/service1$ sudo docker build -t microservice1 .

# username@hostname:~/path/websimple/sredojo/backend/service1$ sudo docker tag microservice1 y8p3kxzuctktsz6/softwavecr:ms1latestag