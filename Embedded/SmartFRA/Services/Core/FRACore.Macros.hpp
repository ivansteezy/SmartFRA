#ifndef FRACORE_MACROS_HPP
#define FRACORE_MACROS_HPP

#define interface struct

#define FRA_DECLARE_INTERFACE(interf, iid) virtual ~interf(); \
        static INTERFACEID IID(){ return iid; }

#define FRA_IMPLEMENT_INTERFACE(interf) interf::~interf() {}

#define FRA_DECLARE_CLASSFACTORY(F, I) \
struct F\
{\
    static FRA::Core::ComPtr<I> CreateInstance(); \
};

#define FRA_IMPLEMENT_CLASSFACTORY(F, IMPL, I) \
FRA::Core::ComPtr<I> F::CreateInstance()\
{\
    I* p = new (std::nothrow)IMPL();\
    if(p != nullptr) \
        return FRA::Core::ComPtr<I>(p);\
    throw std::bad_exception();\
}

#define FRA_DEPENDENCY(TYPE, NAME, NAMESPACE, DEPENDENCY) \
    protected: TYPE NAME = FRA::NAMESPACE::Global##DEPENDENCY::Instance();

#endif
