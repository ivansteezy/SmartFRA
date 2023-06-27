#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QDebug>
#include <QProcess>

#include <opencv2/opencv.hpp>

// #include "SystemInitializer.Base.hpp"
// #include "SystemInitializer.hpp"

int main(int argc, char *argv[])
{
    std::cout << "Hola desde la version: " << CV_VERSION << " de OpenCV y con logger\n";
    qputenv("QT_IM_MODULE", QByteArray("qtvirtualkeyboard"));

    // auto systemInitializer = FRA::Bootstraping::SystemInitializer::CreateInstance();
    // systemInitializer->Initialize();

    // test/
    // auto manager = FRA::Networking::HttpRequetsManager::CreateInstance();
    // manager->Get("https://httpbin.org/get");

#if QT_VERSION < QT_VERSION_CHECK(6, 0, 0)
    QCoreApplication::setAttribute(Qt::AA_EnableHighDpiScaling);
#endif
    QGuiApplication app(argc, argv);

    QQmlApplicationEngine engine;

    const QUrl url(QStringLiteral("qrc:/qml/main.qml"));
    QObject::connect(&engine, &QQmlApplicationEngine::objectCreated,
                     &app, [url](QObject *obj, const QUrl &objUrl) {
        if (!obj && url == objUrl)
            QCoreApplication::exit(-1);
    }, Qt::QueuedConnection);
    engine.load(url);

//    QProcess* process = new QProcess();

//    process->start("python", QStringList() << "../../../../Python/faceRecognition.py");
//    process->waitForFinished();
//    auto result = process->exitCode();

//    auto result = QProcess::execute("python", QStringList() << "../../Python/f_recognition.py");
//    qDebug() << "El codigo es: " << result;

    QProcess process;
    process.start("python", QStringList() << "../../Python/f_recognition.py");

    if(process.waitForStarted() && process.waitForFinished())
    {
        QByteArray res = process.readAllStandardOutput();
        QString output(res);

        qDebug() << "El codgio de ejecucion fue: " << process.exitCode();
        qDebug() << "el string es: " << output;
    }
    else
    {
        qDebug() << "ERROR";
    }

    return app.exec();
}
