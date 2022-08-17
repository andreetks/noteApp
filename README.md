# Getting Started
This api need [python](https://www.python.org/) v3+ to run.

Install the requirements from requirements.txt file
```
$ pip install -r requirements.txt
```

Change SECRET_KEY variable in noteapp/setting.py to your secret key.
![before](https://i.postimg.cc/SKj3K0Dr/Screenshot-from-2022-06-24-16-27-54.png)
![after](https://i.postimg.cc/yxrSsZdn/After-Secret-Key.png)

Copy and paste this into the terminal
```
python manage.py makemigrations
python manage.py migrate
```

In order to collect static files of the react application run 
```
cd frontend
npm install
npm run build
```

Collect static files to be used for Django
>If you are in frontend folder run ```cd ..``` first
```
python manage.py collectstatic --noinput
```


And last but not least, Run the server
```
python manage.py runserver
```

