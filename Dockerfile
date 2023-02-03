FROM openjdk:11

ARG JAR_FILE=target/web-1.0.jar

WORKDIR /app

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java","-jar","app.jar"]