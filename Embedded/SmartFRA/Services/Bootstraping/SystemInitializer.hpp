#ifndef SYSTEMINITIALIZER_HPP
#define SYSTEMINITIALIZER_HPP

#include "SystemInitializer.Base.hpp"
#include "../Logging/Logging.Base.hpp"

namespace FRA
{
    namespace Bootstraping
    {
        class SystemInitializerImpl : public QObject, public Core::Implements<ISystemInitializer, FRA::Core::IQtObjectSupport>
        {
            Q_OBJECT;

        public:
            SystemInitializerImpl();
            virtual ~SystemInitializerImpl();

            virtual void Initialize() override;

            virtual QObject* AsQtObject() override;
            virtual const QMetaObject* MetaObject() override;

        private:
            FRA::Core::ComPtr<FRA::Logging::ILogger> mLogger;
        };
    }
}

#endif
