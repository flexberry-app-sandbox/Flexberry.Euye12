﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Euye12
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Дом.
    /// </summary>
    // *** Start programmer edit section *** (Дом CustomAttributes)

    // *** End programmer edit section *** (Дом CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДомE", new string[] {
            "НомерДома as \'Номер дома\'"})]
    [View("ДомL", new string[] {
            "НомерДома as \'Номер дома\'"})]
    public class Дом : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерДома;
        
        private IIS.Euye12.Улица fУлица;
        
        // *** Start programmer edit section *** (Дом CustomMembers)

        // *** End programmer edit section *** (Дом CustomMembers)

        
        /// <summary>
        /// НомерДома.
        /// </summary>
        // *** Start programmer edit section *** (Дом.НомерДома CustomAttributes)

        // *** End programmer edit section *** (Дом.НомерДома CustomAttributes)
        public virtual int НомерДома
        {
            get
            {
                // *** Start programmer edit section *** (Дом.НомерДома Get start)

                // *** End programmer edit section *** (Дом.НомерДома Get start)
                int result = this.fНомерДома;
                // *** Start programmer edit section *** (Дом.НомерДома Get end)

                // *** End programmer edit section *** (Дом.НомерДома Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Дом.НомерДома Set start)

                // *** End programmer edit section *** (Дом.НомерДома Set start)
                this.fНомерДома = value;
                // *** Start programmer edit section *** (Дом.НомерДома Set end)

                // *** End programmer edit section *** (Дом.НомерДома Set end)
            }
        }
        
        /// <summary>
        /// Дом.
        /// </summary>
        // *** Start programmer edit section *** (Дом.Улица CustomAttributes)

        // *** End programmer edit section *** (Дом.Улица CustomAttributes)
        [PropertyStorage(new string[] {
                "Улица"})]
        [NotNull()]
        public virtual IIS.Euye12.Улица Улица
        {
            get
            {
                // *** Start programmer edit section *** (Дом.Улица Get start)

                // *** End programmer edit section *** (Дом.Улица Get start)
                IIS.Euye12.Улица result = this.fУлица;
                // *** Start programmer edit section *** (Дом.Улица Get end)

                // *** End programmer edit section *** (Дом.Улица Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Дом.Улица Set start)

                // *** End programmer edit section *** (Дом.Улица Set start)
                this.fУлица = value;
                // *** Start programmer edit section *** (Дом.Улица Set end)

                // *** End programmer edit section *** (Дом.Улица Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДомE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДомE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДомE", typeof(IIS.Euye12.Дом));
                }
            }
            
            /// <summary>
            /// "ДомL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДомL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДомL", typeof(IIS.Euye12.Дом));
                }
            }
        }
    }
}
