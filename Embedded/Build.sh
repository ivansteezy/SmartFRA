#!/bin/bash
[ -d build ] && rm -r build ; mkdir build ; /home/syro/Qt/6.3.1/gcc_64/bin/qt-cmake -S SmartFRA/ -B build/ ; cd build/ ; make ; cd ..

