import QtQuick 2.15
import QtQuick.Window 2.15
import QtQuick.VirtualKeyboard 2.15
import QtQuick.Controls 2.15
import QtQuick.Layouts

Window {
    id: mainWindow
    width: 1024
    height: 600
    visible: true
    title: qsTr("SmartFRA")
    flags: Qt.FramelessWindowHint
    x: Screen.width / 2 - width / 2
    y: Screen.height / 2 - height / 2


    Item {
        FontLoader {
            id: fraBold
            source: "qrc:/fonts/bold.ttf"
        }

        FontLoader {
            id: fraRegular
            source: "qrc:/fonts/regular.ttf"
        }

        ColumnLayout {
            id: textLayout
            anchors.fill: parent

            anchors.left: parent.left
            anchors.right: parent.right
            anchors.top: parent.top

            anchors.leftMargin: 600
            anchors.topMargin: 100
            anchors.rightMargin: 20

            Label {
                Layout.alignment: Qt.AlignCenter
                text: "Bienvenido"
                font.family: fraBold.font.family
                font.pixelSize: 50
                font.bold: true
                font.weight: 400
                color: '#05364D'
            }
            Label {
                Layout.alignment: Qt.AlignCenter
                text: "a SmartFRA"
                font.family: fraBold.font.family
                font.pixelSize: 50
                font.bold: true
                font.weight: 400
                color: '#05364D'
            }

            Label {
                Layout.alignment: Qt.AlignCenter
                text: "¿Cómo ingresaremos?"
                font.family: fraBold.font.family
                font.pixelSize: 20
                font.bold: true
                font.weight: 400
                color: '#D9D9D9'
            }

            Item { height: 20 }
            Button {
                id: driverResidentConductor

                contentItem: Text {
                    text: "Residente conductor"
                    color: "#FFFFFF"
                    font.family: fraRegular.font.family
                    font.pixelSize: 18
                    horizontalAlignment: Text.AlignHCenter
                    verticalAlignment: Text.AlignVCenter
                }

                background: Rectangle {
                    implicitWidth: 300
                    implicitHeight: 40
                    color: driverResidentConductor.down ? "#084f70" : "#05364D"
                    radius: 5
                }

                onClicked: {
                    var residentDriverHomePage = Qt.createComponent("ResidentDriverHomePage.qml")
                    var residentWindow = residentDriverHomePage.createObject(residentDriverHomePage)

                    residentWindow.show()
                    mainWindow.close()
                }
            }

            Item { height: 20 }
            Button {
                id: driverVisitorButton

                contentItem: Text {
                    text: "Visitante conductor"
                    color: "#FFFFFF"
                    font.family: fraRegular.font.family
                    font.pixelSize: 18
                    horizontalAlignment: Text.AlignHCenter
                    verticalAlignment: Text.AlignVCenter
                }

                background: Rectangle {
                    implicitWidth: 300
                    implicitHeight: 40
                    color: driverVisitorButton.down ? "#084f70" : "#05364D"
                    radius: 5
                }
            }

            Item { height: 20 }
            Button {
                id: walkingResidentButton

                contentItem: Text {
                    text: "Residente peatón"
                    color: "#FFFFFF"
                    font.family: fraRegular.font.family
                    font.pixelSize: 18
                    horizontalAlignment: Text.AlignHCenter
                    verticalAlignment: Text.AlignVCenter
                }

                background: Rectangle {
                    implicitWidth: 300
                    implicitHeight: 40
                    color: walkingResidentButton.down ? "#084f70" : "#05364D"
                    radius: 5
                }
            }

            Item { height: 20 }
            Button {
                id: walkingVisitorButton

                contentItem: Text {
                    text: "Visitante peatón"
                    color: "#FFFFFF"
                    font.family: fraRegular.font.family
                    font.pixelSize: 18
                    horizontalAlignment: Text.AlignHCenter
                    verticalAlignment: Text.AlignVCenter
                }

                background: Rectangle {
                    implicitWidth: 300
                    implicitHeight: 40
                    color: walkingVisitorButton.down ? "#084f70" : "#05364D"
                    radius: 5
                }
            }
        }
    }



    Image {
        id: background
        anchors.fill: parent
        source: "qrc:/images/background.png"
        z: -1
    }

//    Shortcut: {
//        sequence: "Esc"
//        onActivated: {
//            console.log("exiting..")
//            mainWindow.close()
//        }
//    }
}
