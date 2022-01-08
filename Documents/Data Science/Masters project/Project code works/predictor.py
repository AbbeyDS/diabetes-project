import joblib
import numpy as np
import warnings
warnings.filterwarnings('ignore')


model = joblib.load("bristol_diabetes_predictor.pkl")

class diabetic():

    def __init__(self, bmi: float, age: int, glucose: int, insulin: int, bp: int):
        self.age = age
        self.bmi = bmi
        self.glucose = glucose
        self.insulin = insulin
        self.bloodpressure = bp

    def make_prediction(self):
        user_data = np.array([self.glucose, self.bloodpressure, self.insulin, self.bmi, self.age])
        model_input = user_data.reshape(1, -1)

        prediction = model.predict(model_input)[0]
        confidence = model.predict_proba(model_input)[0]

        def __prediction_output():
            if prediction == 0:
                risk = round(confidence[1]*100,0)
                if risk <= 20:
                    level = "Low"
                    message = " Your diabetic tendencies are minimal."
                    percentage = f"{risk}%"
                elif risk > 20 and risk <= 36:
                    level = "Moderate"
                    message = " Your diabetic tendencies are moderate."
                    percentage = f"{risk}%"
                else:
                    level = "Slightly Rising"
                    message = " Your diabetic tendencies are slightly rising above moderate levels."
                    percentage = f"{risk}%"
                return percentage, level, message

            else:
                risk = round(confidence[1]*100,0)
                if risk <= 60:
                    level = "Moderate"
                    message = " Your diabetic tendencies are Moderate but slightly increasing."
                    percentage = f"{risk}%"
                elif risk > 60 and risk <= 80:
                    level = "High"
                    message = " Your diabetic tendencies are High."
                    percentage = f"{risk}%"
                else:
                    level = "Alarming"
                    message = " Your diabetic tendencies are Alarming."
                    percentage = f"{risk}%"
                return percentage, level, message

        percentage, level, message = __prediction_output()


        return {"percentage": percentage,
                        "level": level,
                    "message": message}


def Predictor(data: dict):

    bmi, age, glucose = float(data['BMI']), int(data['Age']), float(data['Glucose'])
    insulin, bp = float(data['Insulin']), float(data['BloodPressure'])

    patient = diabetic(bmi, age, glucose, insulin, bp)

    prediction = patient.make_prediction()
      
    return prediction