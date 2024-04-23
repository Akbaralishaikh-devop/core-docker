FROM openjdk:17
WORKDIR /cockpit
EXPOSE 9082
COPY . .
ADD target/automation-0.0.1-SNAPSHOT.war /automation-0.0.1-SNAPSHOT.war
ENTRYPOINT ["java","-jar","/automation-0.0.1-SNAPSHOT.war"]
