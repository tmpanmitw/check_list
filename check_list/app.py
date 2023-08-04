# app.py

from flask import Flask, request, jsonify

app = Flask(__name__)

checklist = []

@app.route('/api/checklist', methods=['GET'])
def get_checklist():
    return jsonify(checklist)

@app.route('/api/checklist', methods=['POST'])
def add_checklist_item():
    data = request.get_json()
    if 'text' in data:
        new_item = {
            'text': data['text'],
            'isChecked': False
        }
        checklist.append(new_item)
        return jsonify({"message": "Item added successfully"}), 201
    else:
        return jsonify({"error": "Invalid data"}), 400

if __name__ == '__main__':
    app.run()
