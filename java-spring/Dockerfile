FROM eclipse-temurin:21-jdk AS build
WORKDIR /app

COPY pom.xml mvnw* ./
COPY .mvn .mvn
RUN ./mvnw dependency:go-offline -B

COPY src src
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre
WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

ENV PORT=8080
EXPOSE 8080

CMD ["java", "-Dserver.port=${PORT}", "-jar", "app.jar"]
