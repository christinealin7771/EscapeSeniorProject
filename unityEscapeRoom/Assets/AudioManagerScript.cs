using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioManagerScript : MonoBehaviour
{
    [SerializeField] AudioSource MusicSource;
    [SerializeField] AudioSource SFXSource;
    // Start is called before the first frame update
    public AudioClip background;
    public AudioClip clickSound;
    void Start()
    {
        MusicSource.clip = background;
        MusicSource.Play();
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
