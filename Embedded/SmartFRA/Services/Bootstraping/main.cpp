#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QDebug>

#include <opencv2/opencv.hpp>

#include "../Logging/Logger.hpp"
#include "../Networking/HttpRequestsManager.hpp"

int main(int argc, char *argv[])
{
    std::cout << "Hola desde la version: " << CV_VERSION << " de OpenCV y con logger\n";
    qputenv("QT_IM_MODULE", QByteArray("qtvirtualkeyboard"));

    FRA::Networking::HttpRequestsManager<FRA::Logging::Logger> gNetworkManager;
    gNetworkManager.Get("https://httpbin.org/get");
    // gNetworkManager.Post(QString(), QByteArray());

#if QT_VERSION < QT_VERSION_CHECK(6, 0, 0)
    QCoreApplication::setAttribute(Qt::AA_EnableHighDpiScaling);
#endif
    QGuiApplication app(argc, argv);

    QQmlApplicationEngine engine;

    const QUrl url(QStringLiteral("qrc:/main.qml"));
    QObject::connect(&engine, &QQmlApplicationEngine::objectCreated,
                     &app, [url](QObject *obj, const QUrl &objUrl) {
        if (!obj && url == objUrl)
            QCoreApplication::exit(-1);
    }, Qt::QueuedConnection);
    engine.load(url);

    return app.exec();
}
