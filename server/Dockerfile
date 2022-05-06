FROM python:3.8

ENV PYTHONUNBUFFERED 1

RUN mkdir /server

WORKDIR /server

COPY ./ /

RUN pip install -r /requirements.txt