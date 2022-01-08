from flask import Flask, request, jsonify
import numpy as np
import flask_cors

app = Flask(__name__, static_folder = './build',static_url_path='/')


cors = flask_cors.CORS()
cors.init_app(app)


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

@app.route('/')
def serve():
    return app.send_static_file('index.html')


@app.route('/api', methods=["GET"])
def homepage():
    return "Welcome To Our Diabetes Prediction API"


@app.route('/api/predict', methods=["POST"])
def predict():

    data = request.get_json(force=True)

    feature_list = ['Glucose', 'BloodPressure', 'Insulin', 'BMI', 'Age']

    abs_feats = [x for x in feature_list if x not in data.keys()]

    if len(abs_feats) != 0:
        response = {'status_code': 304,
                'message': f"{abs_feats} not in data "}
        return response

    else:
        from predictor import Predictor

        response = Predictor(data)

        return {'status_code':200,
                'body': response}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
