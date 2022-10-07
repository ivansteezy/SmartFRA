#ifndef SISTEMINITIALIZER_BASE_HPP
#define SISTEMINITIALIZER_BASE_HPP

#include "../Core/FRACore.hpp"

namespace FRA
{
    namespace Bootstraping
    {
        interface ISystemInitializer : FRA::Core::IContract
        {
            FRA_DECLARE_INTERFACE(ISystemInitializer, "ISystemInitializer");

            virtual void Initialize() = 0;
        };
        FRA_DECLARE_CLASSFACTORY(SystemInitializer, ISystemInitializer);
    }
}

#endif
