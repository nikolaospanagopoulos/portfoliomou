from flask import Flask, render_template,url_for,request,redirect
import csv
import smtplib
app = Flask(__name__)



@app.route('/submit_form', methods=['POST'])
def submit_form():
    email=request.form.get('email')
    subject=request.form.get('subject')
    message=request.form.get('message')
    message=(f'{subject},{message},{email}')

    server=smtplib.SMTP('smtp.gmail.com',587)
    server.starttls()
    server.login('panaras254@gmail.com','jimmypage')
    server.sendmail(email,'panaras254@gmail.com',message)
    if request.method=='POST':
        try:
            data=request.form.to_dict()
            return redirect('thankyou.html')
        except:
            return 'did not save to database'
        else:
            return 'something went wrong'    















