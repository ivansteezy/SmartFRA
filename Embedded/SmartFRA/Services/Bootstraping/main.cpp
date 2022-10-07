#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QDebug>

#include <opencv2/opencv.hpp>

#include "SystemInitializer.hpp"

int main(int argc, char *argv[])
{
    std::cout << "Hola desde la version: " << CV_VERSION << " de OpenCV y con logger\n";
    qputenv("QT_IM_MODULE", QByteArray("qtvirtualkeyboard"));

    auto systemInitializer = FRA::Bootstraping::SystemInitializer::CreateInstance();
    systemInitializer->Initialize();

    // test
    // auto manager = FRA::Networking::HttpRequetsManager::CreateInstance();
    // manager->Get("https://httpbin.org/get");

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
