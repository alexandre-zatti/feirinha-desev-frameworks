FROM python:3.9.6-alpine

WORKDIR /usr/src/server

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

RUN pip3 install --upgrade pip
COPY ./requirements.txt .
RUN pip3 install -r requirements.txt

COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /usr/src/server/entrypoint.sh
RUN chmod +x /usr/src/server/entrypoint.sh

COPY . .

ENTRYPOINT ["sh", "/usr/src/server/entrypoint.sh"]