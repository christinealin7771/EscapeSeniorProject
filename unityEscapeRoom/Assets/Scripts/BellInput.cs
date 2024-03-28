using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
namespace NavBells
{
    public class BellInput : MonoBehaviour
    {
        public string bellValue;
        public BellCollection bells;
        public UnityEvent collectionClicked;
        public AudioSource bellSound;

        public void OnMouseDown()
        {
            gameObject.GetComponent<AudioSource>().Play();
            Debug.Log("Clicked Bell " + bellValue);
            collectionClicked.Invoke();
        }

    }
}
